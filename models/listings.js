const mongoose = require('mongoose');


const listingSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true
    },
    description:{
        type : String,
        required : true
    },
    image: {
    filename: {
        type: String,
        default: "listingimage"
    },
    url: {
        type: String,
        default: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
        set :(v) => v === ""?"https://placehold.co/600x400?text=No+Image":v
    }
   },

    price:{ 
        type : Number,
        required : true
    },
    location:{
        type : String,
        required : true
    },
    country:{
        type : String,
        required : true
    },
})


const Listing = mongoose.model("Listing",listingSchema);

module.exports = Listing;