extern crate wasm_bindgen;
use web_sys::Element;

pub struct Laser {
    x: i32,
    y: i32,
    id: usize,
}

impl Laser {
    pub fn new(x: i32, y: i32, id: usize) -> Laser {
        Laser { x, y, id }
    }

    pub fn get(&self) {
        println!("{:?}", self.x);
        println!("{:?}", self.y);
        println!("{:?}", self.id);
    }

    pub fn write_to_dom(&self) {
        let window = web_sys::window().expect("There is no window, run for your life");
        let document = window.document().expect("There is no document");
        let body = document.body().expect("there is no body");

        let root = document
            .get_element_by_id("playboard")
            .expect("There is no root");

        let laser = document.create_element("svg").expect("There is no laser");
        let rect = document.create_element("rect").expect("There is no rect");

        web_sys::Element::set_attribute(&laser, "x", &self.x.to_string());
        web_sys::Element::set_attribute(&laser, "y", &self.y.to_string());
        web_sys::Element::set_id(&laser, "laser");
        laser.append_child(&rect);
        root.append_child(&laser);
    }
}
