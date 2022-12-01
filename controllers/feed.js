const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const User = require("../models/User");

module.exports = {
    likePost: async (req, res) => {
        try {
            
            await Post.findOneAndUpdate(
            { _id: req.params.id },
            {
              $inc: { likes: 1 },
            }
          );
          console.log("Likes +1");
           res.redirect(`/feed`) ;
        } catch (err) {
          console.log(err);
        }
      },
    };

    //add top comments?