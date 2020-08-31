extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

use crate::alien::Alien;
use crate::laser::Laser;
use crate::spaceship::Spaceship;

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
    spaceship: Spaceship,
    directions: Vec<String>,
}

#[wasm_bindgen]
impl Game {
    pub fn new(spaceship: web_sys::HtmlElement) -> Game {
        Game {
            lasers: Vec::new(),
            aliens: Vec::new(),
            dom: get_dom(),
            spaceship: Spaceship::new(spaceship),
            directions: Vec::new(),
        }
    }

    pub fn new_aliens(&mut self, alien_count: usize) {
        for i in 0..alien_count {
            self.aliens.push(Alien::new(100 / i as i32, 0, i));
            self.aliens[i].write_to_dom(&self.dom);
        }
    }

    pub fn shoot(&mut self) {
        let coords = self.spaceship.get_coords();
        let laser = Laser::new(coords.0, coords.1, self.lasers.len());
        laser.write_to_dom(&self.dom);
        self.lasers.push(laser);
    }
}
