ItemEvents.modification(event => {
	event.modify('usefulslime:slime_boots', item => {
		item.maxDamage = 300
	})
	event.modify('usefulslime:slime_sling', item => {
		item.maxDamage = 300
	})

const $MobEffectInstance = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')

  event.modify('meadow:cheese_stick', item => {
    item.setFood({
      saturation: 15,
      canAlwaysEat: false,
      eatSeconds: 0.8, // 0.8 is fast, 1.6 is normal
      nutrition: 8
    })

	/*
	Example food modifier:

  event.modify('minecraft:chorus_fruit', item => {
    item.setFood({
      saturation: 2,
      canAlwaysEat: true,
      eatSeconds: 1.6, // 0.8 is fast, 1.6 is normal
      effects: [
        {
          probability: 1, // Any real number between 0 and 1
          effectSupplier: () =>
            new $MobEffectInstance(
              'minecraft:regeneration', //Effect
				100, //Duration
				0, //Level
				false, //Is Ambient
				true //Hide Particles
            ),
        },
      ],
      nutrition: 4,
      usingConvertsTo: 'minecraft:bowl',
    })
  })*/

})
})