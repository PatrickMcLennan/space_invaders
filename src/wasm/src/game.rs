extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

use crate::alien::Alien;
use crate::laser::Laser;

fn get_dom() -> web_sys::Document {
    let window = web_sys::window().expect("There is no window, run for your life");
    let document = window.document().expect("There is no document");
    document
}

#[wasm_bindgen(constructor)]
pub struct Game {
    lasers: Vec<Laser>,
    aliens: Vec<Alien>,
    dom: web_sys::Document,
}

#[wasm_bindgen]
impl Game {
    pub fn new() -> Game {
        Game {
            lasers: Vec::new(),
            aliens: Vec::new(),
            dom: get_dom(),
        }
    }

    pub fn new_aliens(&mut self, alien_count: usize) {
        for i in 0..alien_count {
            self.aliens.push(Alien::new(100 / i as i32, 0, i));
            self.aliens[i].write_to_dom(&self.dom);
        }
    }

    pub fn shoot(&mut self, x: i32, y: i32) {
        let laser = Laser::new(x, y, self.lasers.len());
        laser.write_to_dom(&self.dom);
        self.lasers.push(laser);
    }
}
