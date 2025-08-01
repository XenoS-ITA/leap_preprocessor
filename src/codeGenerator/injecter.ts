import CodeSnippets from "./codeSnippets"
import Code from "./manager"
import Utils from "./utils"

type Inject = {
    func: string
    code: string
}

class Injecter {
    injects: Inject[] = []
    features: string[] = []

    // Allow to inject code in the next execution of a function
    // Functions need to pass "this" to the code manager to be able to inject code
    inNext(func: string, code: string) {
        //console.log("injectInNext", func)
        this.injects.push({ func, code })
    }

    cleanInjects(func: string) {
        this.injects = this.injects.filter(inject => inject.func !== func)        
    }

    isFunctionInjected(func: string) {
        return this.injects.some(inject => inject.func === func)
    }

    isFunctionInjectedIncludes(func: string, code: string) {
        return this.injects.some(inject => inject.func === func && inject.code.includes(code))
    }

    // Inject the "code" in the code manager
    injectIfNeeded(code: Code, funcname?: string) {
        funcname = funcname || Utils.getCallerName(2);
        
        for (let i = 0; i < this.injects.length; i++) {
            const inject = this.injects[i];
            if (inject.func === funcname) {
                //console.log("Injecting in " + funcname);
                code.add(inject.code);
                this.injects.splice(i, 1);
        
                // Adjust the index after removal to avoid skipping
                i--;
            }
        }
    }

    isFeatureEnabled(name: string) {
        return this.features.includes(name)
    }

    enableGlobalFeature(name: string) {
        if (CodeSnippets[name]) {
            if (this.features.includes(name)) {
                return
            }

            this.features.push(name)
        }
    }

    injectGlobalFeatures(code: any) {
        this.enableGlobalFeature("alwaysInjected")

        for (const name of this.features) {
            //console.log("Injecting feature " + name)
            code.code = CodeSnippets[name]() + ";" + code.code
        }
    }
}

export { Injecter }