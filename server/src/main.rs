#![feature(proc_macro_hygiene, decl_macro)]
use rocket::response::content::Json;
use rocket::{get, ignite, post, routes};

struct NewScore {
    name: Box<str>,
    score: Box<str>,
}

#[get("/getScores")]
fn get_scores() -> &'static str {
    "GET scores!"
}

#[post("/postScore", data = "<score>")]
fn post_scores(score: Json<NewScore>) {}

fn main() {
    ignite().mount("/scores", routes![get_scores]).launch();
}
