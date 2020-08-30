extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

mod game;
mod laser;
use game::Game;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn helloworld(name: &str) {
    alert(&format!("Hello World : {}", name))
}

#[wasm_bindgen]
pub fn start_game() -> Game {
    Game::new()
}
