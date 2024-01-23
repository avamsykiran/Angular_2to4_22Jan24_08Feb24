Angular
-------------------------------------------------------------------------
    
    Pre-Requisites
        HTML 5
            All HTML DOM elements, Forms, Form Validation Attributes, HTML Media Elements, HTML 5 API
        
        CSS 3
            Selectors, CSS-Properties (box model properties, font, text, list and table related properties)
        
        Javascript  (ES 6)
            Javascript Objects and classes - Math, String, Date
            Functions, Closures, Arrow Functions, Call Backs
            DOM API - window, document, 
            OOPs - Class and Object, constructor, methods, static methods
            ES6 - Modules (import and export), Promise, async and await, Template literals, spread operator
            Arrays and Array prototype functions like map,reduce,foreach ..etc.,

        Bootstrap 5 (optional)

    Objectives
        Components (Angular, Dynamic, Styling) - Use of roles of classes and templates to form views in Angular components, load components dynamically, use styling as part of a particular template.
        TypeScript - Enforce data types and object structures and create public and private class arguments.
        Two Way Binding - Use two-way binding to communicate changes between the application state and the view.
        Form Validation - Use form validation in template-driven forms and handle errors appropriately, and use Sync and Async Reactive validators.
        Routing, NgModules, Observables for data transmission and event handling, Dependency Injections, and APIs.

    Angular Intro

        AngularJS           javascript based framework

        Angular 2           typescript  based framework
        Angular 4
                12/15    

        SPA (single page application) framework

        Server                                              Client
         spa-bundle                <--REQ---------
         (index.html + JSCode)
                --------------(spa-bundle) RESP--->         index.html along with the JS code
                                                            is loaded in the browser.

                                                            Any event / form submition/ operating a 
                                                            link ...etc., occurs, it is handled
                                                            by the JS on the cleint itself and the
                                                            relevent HTML is generated on the client 
                                                            itself.

                                                            The generated html can be tailored
                                                            to the existing html page (no concept of
                                                            unloading or reloading a page).

        rest-api        <-------------Data Operation REQ--- spa
                        ------- RESP (data.xml/data.json)--> 

    Angular Lab SetUp

        Node JS     (14 or latest)      node --version
                                        https://nodejs.org
        Angular CLI                     ng version
                                        npm i -g @angular/cli 
        VSCode      IDE

    
        NodeJS offer a development platform where tools for compiling, testing, building, bundling ..etc.,
        can be executed upon.

    Angular Archetecture

        Any angular application comprises of:
            Modules
            Components
            Directives
            Service
            Pipes

        Each of these is a typescript class.
        Each of these is marked with a decorator (for role identification).
        Each of these decorators are passed with a json object called meta-data that contians the config.

        Module
            @NgModule({
                declarations:[],
                imports:[],
                exports:[],
                providers:[],
                bootstrap:[]
            })
            class SalesModule {

            }

        Component
            @Component({
                selector:"[fastMovingStock]",
                templateUrl:"",
                styleUrls:[],
                providers:[]
            })
            class DashboardComponent {

            }

        Directives
            @Directive({
                selector:"[fastMovingStock]",
                providers:[]
            })
            class FastMovingStockMarkerDirective {

            }

        Service
            @Injectable({
                providedIn:"root",
                providers:[]
            })
            class SalesService {

            }

        Pipes
            @Pipe({
                name:'numberToWords',
                providers:[]
            })
            class numberToWordsPipe {

            }

    Angular CLI

        ng new app-name

        cd app-name

            ng g module ModuleName
            ng g component ComponentName --skip-tests
            ng g c ComponentName --skip-tests
            ng g directive DirectiveName --skip-tests
            ng g service ServiceName --skip-tests
            ng g pipe PipeName --skip-tests
            ng g class ClassName --skip-tests
            ng g interface InterfaceName

            ng build        build the application and the bundle is palced isnide a 'dist' folder
            ng test         build the application and execute the test cases.
            ng serve        build the application and the bundle is hosted on a development server @ 4200
                            the port number cna be customized using '--port' flag.
    
    Angular Modules

        