const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Plugins.Model3D
	];
};
self.C3_JsPropNameTable = [
	{Preview: 0},
	{Solid: 0},
	{TiledBackground: 0},
	{Platform: 0},
	{Sprite: 0},
	{"3DModel": 0}
];

self.InstanceType = {
	Preview: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	_3DModel: class extends self.I3DModelInstance {}
}