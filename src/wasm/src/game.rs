extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

use crate::laser;

#[wasm_bindgen(constructor)]
pub struct Game {
    lasers: Vec<laser::Laser>,
}

#[wasm_bindgen]
impl Game {
    pub fn new() -> Game {
        Game { lasers: Vec::new() }
    }

    pub fn shoot(&mut self, x: i32, y: i32) {
        let laser = laser::Laser::new(x, y, self.lasers.len());
        laser.write_to_dom();
        self.lasers.push(laser);
    }
}
