package aula_inatel.starwars;

import com.intuit.karate.junit5.Karate;

class StarWarsRunner {
    
    @Karate.Test
    Karate testStarWars() {
        return Karate.run("starwars").relativeTo(getClass());
    }    

}