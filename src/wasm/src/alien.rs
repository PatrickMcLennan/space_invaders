extern crate wasm_bindgen;

pub struct Alien {
    pub x: i32,
    pub y: i32,
    pub id: usize,
}

impl Alien {
    pub fn new(x: i32, y: i32, id: usize) -> Alien {
        Alien { x, y, id }
    }

    pub fn write_to_dom(&self, dom: &web_sys::Document) {
        let body = dom.body().expect("there is no body");
        let alien = dom.create_element("svg").expect("There is no alien");

        web_sys::Element::set_attribute(&alien, "x", &self.x.to_string())
            .expect("could not assign aliens X");
        web_sys::Element::set_attribute(&alien, "y", &self.y.to_string())
            .expect("could not assign aliens Y");
        web_sys::Element::set_id(&alien, "alien");
        body.append_child(&alien)
            .expect("could not append alien to body");
    }
}
