import React from 'react'
import {MathJaxContext} from "better-react-mathjax";

// Mathjax configuration
const config = {
    "fast-preview": {
      disabled: false
    },
    TeX: {
        extensions: ["AMSmath.js","AMSsymbols.js","noErrors.js","noUndefined.js", "action.js"],
        Macros: {
            bfTheta:"{\\boldsymbol\\Theta}",
            bftheta:"{\\boldsymbol\\theta}",
            bfomega:"{\\boldsymbol\\omega}",
            bfSigma:"{\\boldsymbol\\Sigma}",
            bfPsi:"{\\boldsymbol\\Psi}",
            bflambda:"{\\boldsymbol\\lambda}",
            bfLambda:"{\\boldsymbol\\Lambda}",
            bfalpha:"{\\boldsymbol\\alpha}",
            bfGamma:"{\\boldsymbol\\Gamma}",
            bfgamma:"{\\boldsymbol\\gamma}",
            bfkappa:"{\\boldsymbol\\kappa}",
            bfPhi:"{\\boldsymbol\\Phi}",
            bfphi:"{\\boldsymbol\\phi}",
            bfpsi:"{\\boldsymbol\\psi}",
            bfeta:"{\\boldsymbol\\eta}",
            bfrho:"{\\boldsymbol\\rho}",
            bfxi:"{\\boldsymbol\\xi}",
            bfepsilon:"{\\boldsymbol\\epsilon}",
            bfsigma:"{\\boldsymbol\\sigma}",
            bfnu:"{\\boldsymbol\\nu}",
            bfUpsilon:"{\\boldsymbol\\Upsilon}",
            bftau:"{\\boldsymbol\\tau}",
            bfOmega:"{\\boldsymbol\\Omega}",
            bfbeta:"{\\boldsymbol\\beta}",
            bfpi:"{\\boldsymbol\\pi}",
            bfPi:"{\\boldsymbol\\Pi}",
            bfx: "{\\mathbf{x}}",
            bfy: "{\\mathbf{y}}",
            bfw: "{\\mathbf{w}}",
            bfW: "{\\mathbf{W}}",
            bfr: "{\\mathbf{r}}",
            bfR: "{\\mathbf{R}}",
            bfv: "{\\mathbf{v}}",
            bfV: "{\\mathbf{V}}",
            bfu: "{\\mathbf{u}}",
            bfU: "{\\mathbf{U}}",
            bft: "{\\mathbf{t}}",
            bfT: "{\\mathbf{T}}",
            bfh: "{\\mathbf{h}}",
            bfX: "{\\mathbf{X}}",
            bfY: "{\\mathbf{Y}}",
            bfZ: "{\\mathbf{Z}}",
            bfz: "{\\mathbf{z}}",
            bfA: "{\\mathbf{A}}",
            bfa: "{\\mathbf{a}}",
            bfE: "{\\mathbf{E}}",
            bfe: "{\\mathbf{e}}",
            bfB: "{\\mathbf{B}}",
            bfb: "{\\mathbf{b}}",
            bfP: "{\\mathbf{P}}",
            bfp: "{\\mathbf{p}}",
            bfD: "{\\mathbf{D}}",
            bfd: "{\\mathbf{d}}",
            bfL: "{\\mathbf{L}}",
            bfl: "{\\mathbf{l}}",
            bfI: "{\\mathbf{I}}",
            bfi: "{\\mathbf{i}}",
            bfM: "{\\mathbf{M}}",
            bfm: "{\\mathbf{m}}",
            bfJ: "{\\mathbf{J}}",
            bfj: "{\\mathbf{j}}",
            bfG: "{\\mathbf{G}}",
            bfg: "{\\mathbf{g}}",
            bfS: "{\\mathbf{S}}",
            bfs: "{\\mathbf{s}}",
            bfQ: "{\\mathbf{Q}}",
            bfq: "{\\mathbf{q}}",
            bfO: "{\\mathbf{O}}",
            bfo: "{\\mathbf{o}}",
            bfK: "{\\mathbf{K}}",
            bfk: "{\\mathbf{k}}",
            Expected: "{\\mathbb{E}}",
            argmax: "{\\mathop{\\rm argmax}}",
            argmin: "{\\mathop{\\rm argmin}}",
        }
      },
    tex2jax: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"]
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"]
      ],processEscapes: true
    },
    messageStyle: "none"
  };

  const MathProvider = ({children}) => {



    return(
        <>
            <MathJaxContext version={2} config={config} onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}>
                {children}
            </MathJaxContext>
        </>
    );
  }

  export default MathProvider ; 