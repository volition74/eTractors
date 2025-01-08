<!-- Links -->

[back to top ↑]: #eTractors

<div align="center">

# eTractors <!-- omit in toc -->

System for creating particle effectors in After Effects using expressions

**[Usage](#usage) | [Example](#example) | [Contact](#contact)**

</div>

## Overview

`eTractors` is a way to create 'effector' layers that can attract and repel other layers when they move within a specified distance.

It comes in the form of a JSON file that's imported into the project, and then referenced in expressions.

## Contents

- [Overview](#overview)
- [Contents](#contents)
- [Compatibility](#compatibility)
- [Example](#example)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

## Compatibility

This aeFunctions is compatible with After Effects versions >= 16.0.1 (CC2019) which use the new [Javascript engine](https://helpx.adobe.com/after-effects/using/expression-language-reference.html).

[Back To Top ↑]

## Example

Example layer attraction setup using eTractors:

```javascript
// Import the library
const eTractors = footage('eTractors.jsx').sourceData;

effectorLayer = thisComp.layer("eTractor");
particlePosition = transform.position
effectorRadiusMultiplier = 10; // Enlarge Whole Effect Area
effectorLayerEffectSize = 150; // Set The size of the effector when the strength is maximum from 0 a point to larger as an ellipse

// Create a new effector
const myEffector = eTractors.createEffector(effectorLayer, particlePosition,effectorRadiusMultiplier,effectorLayerEffectSize);

// Move towards attractor
power = myEffector.strength * 100;
value + [power,power]
```

## Usage

### 1. **Download and import `eTractors.jsx` into your After Effects project** <!-- omit in toc -->

Download the `eTractors.jsx` file from the master branch of this repository, and import it into your After Effects project.

### 2. **Add a reference to the library in your expression** <!-- omit in toc -->

> aeEffector is designed to be used on the 2D position property of a layer, and this is assumed by all of the following expressions.

To reference the library in an expression, you need to assign it to a variable. This is done via the line:

```javascript
const eTractors = footage('eTractors.jsx').sourceData;
```

> ⚠️ Since After Effects doesn't count footage items that are only referenced within expressions as used, it's recommended that you also place the `eTractors.jsx` file in any compositions where it is referenced.
>
> This will ensure After Effects includes the file when collecting assets or packaging into a Motion Graphics Template.

### 3. Create a new effector <!-- omit in toc -->

This creates a new effector based on an effector layer, and the position of the current layer.

```javascript
const myEffector = eTractors.createEffector(effectorLayer, particlePosition, effectorRadiusMultiplier, effectorLayerEffectSize);
```

The `createEffector` function returns an object with a couple of properties you can use to influence the motion of your particle layer.
`effectorRadiusMultiplier` increases the reach of the effector
`effectorLayerEffectSize` is the size of the area that the effect as at maximum strength. 0 default is a maximum strength of a point, where if we set it to 100 then the maximum effect strength occurs within 100 pixels of the attractor position

### 4. Use effector properties <!-- omit in toc -->

```javascript
// Move towards attractor
particlePosition + myEffector.attract;

// Move away from attractor
particlePosition + myEffector.avoid;
```

## License

This project is licensed under the terms of the MIT License.

[Back To Top ↑]

## Contact

Bugs, issues and feature requests can be submitted by filing an [issue](https://github.com/motiondeveloper/aeEffector/issues) on Github. For everything else, feel free to reach out to [@modeveloper](https://twitter.com/modeveloper) on twitter.

[Back To Top ↑]
