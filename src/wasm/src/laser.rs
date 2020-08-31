extern crate wasm_bindgen;

pub struct Laser {
    x: i32,
    y: i32,
    id: usize,
}

impl Laser {
    pub fn new(x: i32, y: i32, id: usize) -> Laser {
        Laser { x, y, id }
    }

    pub fn write_to_dom(&self, dom: &web_sys::Document) {
        let playboard = dom
            .get_element_by_id("playboard")
            .expect("There is no playboard");

        let container = dom.create_element("div").expect("There is no container");
        let laser = dom.create_element("svg").expect("There is no laser");
        let rect = dom.create_element("rect").expect("There is no rect");

        web_sys::Element::set_attribute(&container, "left", &format!("{}px", &self.x.to_string()))
            .expect("x could not be assigned to laser");
        web_sys::Element::set_attribute(&container, "top", &format!("{}px", &self.y.to_string()))
            .expect("y could not be assigned to laser");
        web_sys::Element::set_attribute(&container, "data-id", &self.id.to_string())
            .expect("data-id could not be assigned to laser");
        web_sys::Element::set_attribute(&container, "class", "laser")
            .expect("data-id could not be assigned to laser");
        // web_sys::Element::set_id(&container, "laser");
        laser
            .append_child(&rect)
            .expect("rect could not be appended to laser");
        container
            .append_child(&laser)
            .expect("laser could not be appended to container");
        playboard
            .append_child(&container)
            .expect("laser could not be appended to the dom");
    }
}
