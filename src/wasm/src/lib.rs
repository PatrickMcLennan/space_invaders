extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

mod alien;
mod game;
mod laser;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn helloworld(name: &str) {
    alert(&format!("Hello World : {}", name))
}

#[wasm_bindgen]
pub fn start_game() -> game::Game {
    game::Game::new()
}
