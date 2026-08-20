// kubejsstudio loot tables; re-apply merges by table id
ServerEvents.generateData('after_mods', event => {
    event.json('hexerei:loot_table/blocks/mandrake_plant', {"type":"minecraft:block","pools":[{"rolls":1.0,"bonus_rolls":0.0,"name":"main","entries":[{"type":"minecraft:item","name":"enchanted:mandrake_seeds","functions":[{"enchantment":"minecraft:fortune","formula":"minecraft:binomial_with_bonus_count","function":"minecraft:apply_bonus","parameters":{"extra":3,"probability":0.5714286}}]},{"type":"minecraft:item","name":"hexerei:mandrake_plant","weight":5}]}]})
})
