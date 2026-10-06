const Listing=("../models/listing.js")
const Review=("../models/review.js")

module.exports.postReview=async(req,res,next)=>{
    let listing=await Listing.findById(req.params.id);
    let newReview=new Review(req.body.review);
    newReview.author=req.user._id;
    console.log(newReview);

    listing.reviews.push(newReview)

    await newReview.save();
    await listing.save();

    console.log("new review saved");
    req.flash("success","New review created!");
    res.redirect(`/listings/${listing._id}`);
}

module.exports.destroyReview=async(req,res,next)=>{
    let {id,reviewId}=req.params;
    Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review deleted!");
    res.redirect(`/listings/${id}`);
}