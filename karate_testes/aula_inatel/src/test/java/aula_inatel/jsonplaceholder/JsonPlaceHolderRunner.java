package aula_inatel.jsonplaceholder;

import com.intuit.karate.junit5.Karate;

class JsonPlaceHolderRunner {
    
    @Karate.Test
    Karate testStarWars() {
        return Karate.run("jsonplaceholder").relativeTo(getClass());
    }    

}