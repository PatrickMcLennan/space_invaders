import React from "react";

import * as S from "./Footer.style";

export function Footer(): JSX.Element {
  return (
    <S.Footer>
      <h6>Made by Patrick McLennan &#128526;</h6>
      <a href="www.linkedin.com/in/patrick-mclennan-42002a172" target="_blank" title="Connect with me on LinkedIn!">
        <h4>LinkedIn</h4>
      </a>
      <a href="www.github.com/patrickmclennan" target="_blank" title="Check out my other projects on Github">
        <h4>Github</h4>
      </a>
    </S.Footer>
  );
}
