
require('datejs');

function combineUsers(...args) {
    // Create the object that will hold the merged usernames.
    const combinedObject = {
        users: []
    };

    // Loop through each array supplied to the function.
    for (const userArray of args) {
        // Spread the usernames into the combined users array.
        combinedObject.users = [
            ...combinedObject.users,
            ...userArray
        ];
    }

    // Add today's date in M/d/yyyy format.
    combinedObject.merge_date = Date.today().toString('M/d/yyyy');

    // Return the completed object.
    return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};