///<reference path="World.ts"/>
///<reference path="Parser.ts"/>

module Interpreter {

    //////////////////////////////////////////////////////////////////////
    // exported functions, classes and interfaces/types

    export function interpret(parses : Parser.Result[], currentState : WorldState) : Result[] {
        var interpretations : Result[] = [];
        parses.forEach((parseresult) => {
            var intprt : Result = <Result>parseresult;
            intprt.intp = interpretCommand(intprt.prs, currentState);
			if (intprt.intp != null)
				interpretations.push(intprt);
        });
        if (interpretations.length) {
            return interpretations;
        } else {
            throw new Interpreter.Error("Found no interpretation");
        }
    }


    export interface Result extends Parser.Result {intp:Literal[][];}
    export interface Literal {pol:boolean; rel:string; args:string[];}


    export function interpretationToString(res : Result) : string {
        return res.intp.map((lits) => {
            return lits.map((lit) => literalToString(lit)).join(" & ");
        }).join(" | ");
    }

    export function literalToString(lit : Literal) : string {
        return (lit.pol ? "" : "-") + lit.rel + "(" + lit.args.join(",") + ")";
    }


    export class Error implements Error {
        public name = "Interpreter.Error";
        constructor(public message? : string) {}
        public toString() {return this.name + ": " + this.message}
    }

	//class for interpreting a single parse based on the current worldstate
	class ShrdliteInterpretation {
		constructor(private state : WorldState, private cmd : Parser.Command) {}

		//check if the parsed objects exist in the current state
		//todo: check if the spatial relations between the parsed objects exist
		//todo: throw error depending on what the failure really is (e.g. "Interpretation error: there is no green ball in the current state)
		private checkExistence(ent) : boolean {
			//going through the objects-tree
			while (true) {
				var o = ent.obj;
				if (typeof o.size === "undefined") {
					o = o.obj;
				}

				//when no position can be found
				if (this.getPosition(o) == null) {
					return false;
				}

				if (typeof ent.obj.loc === "undefined") {
					return true;
				}
				ent = ent.obj.loc.ent;
			}
			return false;
		}

		//return the position of the object in the world state
		//note: currently this function only returns the first occurence of an object that matches
		//note: in my eyes this checking should be a method within World (will ask the TA's about if we may do that)
		private getPosition(o) : number {
			for (var i = 0; i < this.state.stacks.length; i++) {
				for (var j = 0; j < this.state.stacks[i].length; j++) {
					var a = this.state.objects[this.state.stacks[i][j]];
					if (((o.size == null || o.size == a.size) &&
						(o.color == null || o.color == a.color) &&
						(o.form == null || o.form == a.form)) ||
				   		(o.form == "floor")) {
							return i;	
					}
				}
			}
			return null;
		}

		//get the interpretation for the parse that was handed over on creation
		//todo: actually interpret something, right now the return is just a dummy
		public getInterpretation() : Literal[][] {
			//check origin
			if (typeof this.cmd.ent !== "undefined") {
				var ent = this.cmd.ent;
				if (!this.checkExistence(ent))
					return null;
			}

			//check destination
			if (typeof this.cmd.loc.ent !== "undefined") {
				var ent = this.cmd.loc.ent;
				if (!this.checkExistence(ent))
					return null;
			}

			var intprt : Literal[][] = [[
				{pol: true, rel: "ontop", args: ["test", "test"]}
			]];

			return intprt;
		}
	}


    //////////////////////////////////////////////////////////////////////
    // private functions

    function interpretCommand(cmd : Parser.Command, state : WorldState) : Literal[][] {
        // This returns a dummy interpretation involving two random objects in the world
        var objs : string[] = Array.prototype.concat.apply([], state.stacks);
        //var a = objs[getRandomInt(objs.length)];
        //var b = objs[getRandomInt(objs.length)];
        //var intprt : Literal[][] = [[
        //    {pol: true, rel: "ontop", args: [a, "floor"]},
        //    {pol: true, rel: "holding", args: [b]}
        //]];
		var interpret = new ShrdliteInterpretation(state, cmd); 
		var intprt : Literal[][] = interpret.getInterpretation();
        return intprt;
    }



    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

}

