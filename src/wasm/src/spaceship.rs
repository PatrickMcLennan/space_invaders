use wasm_bindgen::prelude::*;
extern crate wasm_bindgen;

pub struct Spaceship {
    pub element: web_sys::HtmlElement,
}

impl Spaceship {
    pub fn new(element: web_sys::HtmlElement) -> Spaceship {
        Spaceship { element }
    }

    pub fn get_coords(&self) -> (i32, i32) {
        let offset = web_sys::Element::get_bounding_client_rect(&self.element);
        (offset.left().round() as i32, offset.y().round() as i32)
    }
}
