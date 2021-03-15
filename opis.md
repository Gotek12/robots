npx create-react-app name-app //torzenie applikacji, don't install global create app
npm start //start app   

babel, webpack - convert to older version )because browsers don't use newest js tools)

npx create-react-app monsters-rolodex what create:
files:
    packge.json
    public
    src

package.json
    dodajemy dependencje
    możliości skryptu
    - start (npm start) - uruchamiamy sererek
    - test  - puszczamy testy
    - build - build z el  source code robi nam el zrozumiałe dla przeglądarki (webpack itp) i wrzuca do pulblic folder
    - eject - show hidden webpack, babel configuration
src - trzymamy cały source code aplikacji
public - tu trzymane są el do starej wersji

możemy tworzyć el jako class i function (komponenty)
class have acces to state -> and we have acces in class and other classes using that component

state vs props  
state is in class component  
props is inside functional components

state change hen suer do sth 
1 ay data flow (data goes one direction from parent to children like props)

deploying app:  
git remote add orgin https://github.com/Gotek12/monstersRolodex.git - connect to repo  
npm add gh-pages - aby podłączyć github pages  
add to json:  
- "homepage": "https://Gotek12.github.io/monstersRolodex",
- "predeploy": "yarn build",
- "deploy": "gh-pages -d build" (yarn add gh-pages)

and next yarn deploy and next add and commit and git push -u origin main  

(nie działa - ogarnąć github-pages)

skończyłem na 33 (reszta może później)   

próba inna dla monsterRolodex
"scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build",
      …
  }
