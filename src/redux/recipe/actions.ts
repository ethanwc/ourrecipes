import { CREATE_RECIPE, RecipeActionTypes, Recipe } from "./types";
import Axios from "axios";

export const add = (newItem: Recipe): RecipeActionTypes => {
    return {
        type: CREATE_RECIPE,
        payload: newItem
    };
};



// export const createRecipe = (newRecipe:  Recipe) => {
//     return (dispatch: any) => {
//       // Make a request for a user with a given ID
//       Axios.post(
//         'https://fuxxebseq4.execute-api.us-west-2.amazonaws.com/Prod/graphql',
//         {
//           query: `{
//             user (ids: [${id}]) {
//                 name
//                 id
//                 email
//                 bookmarks
//             }
//         }`,
//           variables: {
//             id: 2,
//             city: 'Test',
//           },
//         },
//       )
//         .then(function (response: any) {
//           // handle success
//           console.log(JSON.stringify(response.data));
//           // dispatch(
//           //   add({
//           //     id: 'asdfd',
//           //     name: 'asddddf',
//           //     creatorid: 'asdddf',
//           //     creationDate: new Date(),
//           //     memberids: ['asdff'],
//           //   }),
//           // );
//         })
//         .catch(function (error: any) {
//           // handle error
//           console.log(error);
//         })
//         .finally(function () {
//           //todo stop animation
//         });
//     };
//   };
  