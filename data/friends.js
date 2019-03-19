// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var newFriend = [
    {
      name: "Ahmed",
      photo: "https://i.ytimg.com/vi/ktlQrO2Sifg/maxresdefault.jpg",
      scores: ["1","5","3","2","1","5","4","5","4","1"]
      
    },
    {
        name: "BAhmed",
        photo: "https://media.nbcwashington.com/images/652*367/sabina-surjit-henderson-up-close.jpg",
        scores: ["2","5","3","2","1","5","4","5","4","1"]
    },
    {
        name: "Sarah",
        photo: "https://media.nbcwashington.com/images/652*367/sabina-surjit-henderson-up-close.jpg",
        scores: ["1","1","1","1","1","1","1","1","1","1"]
        
      }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = newFriend;