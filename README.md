# cautious-couscous
A handson exercise folder for Angular. I hope to upskill and have great fun learning about it.

## Documentation References
1. [Angular documentation](https://angular.io/)
2. [File Structure](https://angular.io/guide/file-structure)


### [Common Angular commands](https://angular.io/cli)
1. Checking Angular Version
    -   `ng version`
    -   `ng v`
2. Create new workspace and initial Angular app
    -   `ng new <name>`
    -   `ng n <name>`
3. Generate files based on schematic(s)
    -   `ng generate <semantic>`
    -   `ng g <semantic>`
4. Add support for external library
    -   `ng add <ext_lib>`
5. Serve for dev purposes
    -   `ng serve`
    -   `ng s`
6. Build & Deploy an Angular app
    -   `ng build`
    -   `ng b`

### [RxJS](https://rxjs.dev/guide/overview)
1. What problem is RxJS trying to solve?
- Mainly, analogically, to handle ansync calls with multiple events.

2. Why do we still need RxJS if we have promises?
- Promises are when we don't want to wait. But when multiple events are to be handled at same time, RxJS is a bit easier to implement.

3. What is a pipe?
- A pipe in RxJS (you need to import it), like any other "pipe" sends data from one place to another. However, in our RxJS pipe, we can perform basic manipulation of data. We can process pipes before we even subscribe.

4. How is it different from Angular Pipe?
- You don't need to explicitly mention angular pipes or import them. Just use the | symbol. Also, there are some implementation differences.

3. What is an Observable?
- Observables are lazy Push collections of multiple values. Observables are like functions with zero arguments, but generalize those to allow multiple values.

4. What is an Observer?
- It "observer"/processes/reads/works on an observable.

## Mini projects

This section shows brief details of the tasks we perform to know more about angular in detail.

| Project  | Description |
| ------------- |:-------------:|
| 1. hellong      | Hello World     |
| 2. counter-app      | A counter for 0-10; with reset     |
| 3. ncore-angular      | Nuke arch n' rebuild an app     |
| 4. new-word-generator | Generate x words; randomly select from array |
| 5. tic-tac-toe | My fav passtime game and I think it is easy :) |
| 6. todo-app | A todo app to monitor tasks |
| 7. signup-reactive | A reactive form for signup operations |
| 8. random-card | A page to display contact info using APIs |


That's all for now; chill ;)