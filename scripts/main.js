Events.on(ClientLoadEvent, () => {
    const wolf = new Planet("wolf", Planets.sun, 2, 1);
    wolf.generator = new SerpuloPlanetGenerator();
    wolf.mesh = new HexMesh(wolf, 5);
    wolf.orbitRadius = 20;
    wolf.orbitTime = 1.5 * 30;
    wolf.rotateTime = 10;
    wolf.bloom = true;
    wolf.accessible = true;
    wolf.startSector = 1;
    wolf.hasAtmosphere = true;
    wolf.atmosphereColor = Liquids.cryofluid.color;
    wolf.atmosphereRadIn = 0.1;
    wolf.atmosphereRadOut = 0.3;
    wolf.alwaysUnlocked = true;
    wolf.localizedName = "Alpha 1";

    for(var i = 0; i < 9; i++){
        var h = new SectorPreset("Alpha 1-" + i, wolf, i);
        h.localizedName = "Alpha 1-" + i;
        h.alwaysUnlocked = true;
	h.difficulty = 4;
    };
});
