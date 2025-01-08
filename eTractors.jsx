{
    'createEffector': function(effectorLayer, particlePosition, effectZoneMultiplier = 1, FullStrengthBuffer = 0) {
        const getLongestSide = (layer) => {
            const layerRect = layer.sourceRectAtTime(0, false);
            return Math.max(layerRect.width, layerRect.height);
        }
        const vectorToEffector = effectorLayer.sub(effectorLayer.transform.position, particlePosition);
        const vectorFromEffector = effectorLayer.sub(particlePosition, effectorLayer.transform.position);
        const distanceFromEffector = effectorLayer.length(vectorToEffector);
        const effectorRadius = getLongestSide(effectorLayer) * effectZoneMultiplier;

        const moveAmount = effectorLayer.ease(distanceFromEffector, effectorRadius, 0 + Math.max(Math.min(FullStrengthBuffer,effectorRadius*0.99),0), 1, 0);

        const moveToEffector = effectorLayer.mul(vectorToEffector, moveAmount);
        const moveAwayFromEffector = effectorLayer.mul(vectorFromEffector, moveAmount);

        return {
            attract: moveToEffector,
            avoid: moveAwayFromEffector,
            strength: moveAmount,
        };
    }
}
