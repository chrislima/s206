package aula_inatel.inatel;

import com.intuit.karate.junit5.Karate;

class InatelRunner {
    
    @Karate.Test
    Karate testStarWars() {
        return Karate.run("inatel").relativeTo(getClass());
    }    

}