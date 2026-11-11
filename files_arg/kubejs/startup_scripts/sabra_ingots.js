StartupEvents.registry('item', event => {

    event.create('titan_ingot')
        .displayName('Титановый слиток')
        .tooltip(Text.of('Прочный и легкий металл').gray())
        .glow(false)

    event.create('titan_ore')
        .displayName('Сфеновый камень')
        .tooltip(Text.of('Минерал, содержит сфен').gray())
        .glow(false)

    event.create('wolfram_ingot')
        .displayName('Слиток вольфрама')
        .tooltip(Text.of('Не уроните на ногу...').gray())
        .glow(false)

    event.create('wolfram_ore')
        .displayName('Вольфрамит')
        .tooltip(Text.of('Крупные залежи этой руды были найдены на ').gray())
        .glow(false)

    event.create('titanwolfram_alloy')
        .displayName('§9Сплав TiW')
        .tooltip(Text.of('Хорошее сочетание!').gray())
        .glow(false)

    event.create('ultimate_alloy')
        .displayName('§6Сплав Заката')
        .tooltip(Text.of('Первый слиток был найден в руинах Цитадели').gray())
        .glow(false)
})