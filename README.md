# Why use TypeScript?

## About this Project

This shows two implementations of the same simple React component. One is written in JSX, while the other is written in TSX.

The JSX component has two bugs that make it behave incorrectly. Neither is "obvious", and in the context of a larger application could easily slip in during development. Neither would necessarily get spotted by a code review.

Take a look at the JSX component and see how long it takes you to spot both issues.

Both issues are caught by the TypeScript compiler, encouraging the developer to do the right thing.

<details>
  <summary>The two bugs</summary>

  ### 1: The calculation doesn't add properly
  
  This is pretty obvious when you try to use the calculator - it doesn't behave as expected.
  
  Even though the `input` has `type=number`, its value is still a `string`. 
  So doing `value + total` results in string concatenation, not numeric addition.
  
  When fixing this bug, the immediate response may be to change the calculation, i.e. to ensure that `value` is converted to a number just-in-time when calling `setTotal`. While this does work, it only addresses the problem for `setTotal`. If `value` is used in other places, we may run into similar issues elsewhere. `value` is initialised as a `number`, but may be replaced by a `string` after the first `setValue`.
  
  The correct behaviour is to coerce the value to a `number` when the value changes, i.e. to ensure that `setValue` is always passed a `number`. TypeScript makes this very obvious.
  

  ### 2: The form does not stack
  
  Again, this is very obvious in the UI.
  
  In this particular case, the bug is caused by a subtle typo. The flex direction is mistakenly set to `colunm` instead of `column`.
  
  For CSS properties that take a limited range of values, TypeScript can provide more detailed type-checking. As well as catching keyboard typos, this could also detect values such as `flex-column`, which are spelled correctly, but invalid.
</details>


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
