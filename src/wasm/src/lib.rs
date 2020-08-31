extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

mod alien;
mod game;
mod laser;
mod spaceship;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn helloworld(name: &str) {
    alert(&format!("Hello World : {}", name))
}

#[wasm_bindgen]
pub fn start_game(spaceship: web_sys::HtmlElement) -> game::Game {
    game::Game::new(spaceship)
}
