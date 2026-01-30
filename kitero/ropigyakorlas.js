//1. feladat
function Blogpost(title, author, content) {
    this.title = title;
    this.author = author;
    this.content = content;
}   

//2.feladat
function SponsoredPost(title, author, content, sponsorName)  {
    Blogpost.call(this, title, author, content);
    this.sponsorName = sponsorName;

}

SponsoredPost.prototype.Dsiplay = function() {
    console.log(this.title, this.sponsorName) 
}

const sp1 = new SponsoredPost("JS alapok", "Péter", "Ez egy bejegyzés a JS alapjairól.", "CodeBerry");
sp1.Dsiplay();



