extern crate wasm_bindgen;

pub struct Laser {
    x: i32,
    y: i32,
    id: usize,
}

impl Laser {
    pub fn new(id: usize, spaceship: &web_sys::Element) -> Laser {
        Laser {
            x: spaceship.get_bounding_client_rect().left() as i32,
            y: spaceship.get_bounding_client_rect().top() as i32,
            id,
        }
    }

    pub fn write_to_dom(&self, dom: &web_sys::Document) {
        let playboard = dom
            .get_element_by_id("playboard")
            .expect("There is no playboard");

        let container = dom.create_element("div").expect("There is no container");

        web_sys::Element::set_attribute(
            &container,
            "style",
            &format!(
                "top: {}px; left: {}px",
                &self.y.to_string(),
                &self.x.to_string()
            ),
        )
        .expect("There was an error placing the spaceship");
        web_sys::Element::set_attribute(&container, "data-id", &self.id.to_string())
            .expect("data-id could not be assigned to laser");
        web_sys::Element::set_attribute(&container, "class", "laser")
            .expect("data-id could not be assigned to laser");
        playboard
            .append_child(&container)
            .expect("laser could not be appended to the dom");
    }
}
