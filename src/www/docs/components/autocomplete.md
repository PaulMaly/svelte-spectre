---
file: autocomplete.md
title: Autocomplete
api: [
    {title: 'predefined: string | Item = []', description: 'Predefined values array input', variables: 'type Item = {
		index: number;
		label: string;
		value?: any;
		group?: string;
		type?: Color;
		style?: string;
	}'},
	{title: 'selected: Item[] = []', description: 'Selected values array output', variables: '[]'},
	{title: 'created: Item[] = []', description: 'Created values array output', variables: '[]'},
	{title: 'groupBy: (item: Item) => item = undefined', description: 'Groupping condition – returns headers strings', variables: 'groups headers'},
	{title: 'predictable: boolean = false', description: 'Open suggested values list only on search match', variables: 'true | false'},
	{title: 'creatable: boolean = false', description: 'Can add to suggested list new values', variables: 'true | false'},
	{title: 'placeholder: string = "type here"', description: 'Placeholder', variables: 'any string'},
	{title: 'empty: string = "No suggested"', description: 'No suggested message', variables: 'any string'}
]
config:
    {
        placeholder: { size: 12 },
        empty: { size: 12 },
        predictable: { type: 'checkbox' },
        creatable: { type: 'checkbox' },
        objects: { type: 'checkbox' },
        groups: { size: 'auto' }
    }
---

<script>
    import { Autocomplete } from '$lib'
    import Knobs from '../_knobs.svelte'

    let objects = [
            {label: '{ top_left }', value: 'top_left', group: 'top'},
            {label: '{ top_center }', value: 'top_center', group: 'top'},
            {label: '{ top_right }', value: 'top_right', group: 'top'},
            {label: '{ center_left }', value: 'center_left', group: 'center'},
            {label: '{ center_center }', value: 'center_center', group: 'center'},
            {label: '{ center_right }', value: 'center_right', group: 'center'},
            {label: '{ bottom_left }', value: 'bottom_left', group: 'bottom'},
            {label: '{ bottom_center }', value: 'bottom_center', group: 'bottom'},
            {label: '{ bottom_right }', value: 'bottom_right', group: 'bottom'},
        ],
        strings = [
            '↖ top_left',
            '↑ top_center',
            '↗ top_right',
            '← center_left',
            '✛ center_center',
            '→ center_right',
            '↙ bottom_left',
            '↓ bottom_center',
            '↘ bottom_right',
        ],
        state = {
            placeholder: 'type here',
            empty: 'No suggested',
            predictable: false,
            creatable: false,
            groups: 'top_, center_, bottom_',
            objects: false,
        },
        selected = [{label: '↘ bottom_right'}],
        created = []
    
    
    const groupBy = (item) => {
        return state.groups.split(', ').find((g) => item.value.includes(g))
    }

    $: predefined = state.objects ? objects : strings
</script>

# {title}

Autocomplete form component provides suggestions while you type. It is often
used for tags and contacts input.

<p>
    <Autocomplete
        {predefined}
        bind:selected
        bind:created
        placeholder={state.placeholder}
        creatable={state.creatable}
        predictable={state.predictable}
        empty={state.empty}
        {groupBy} 
    />
    <small>Selected: [ {selected.map(s => s.label).join(', ')} ]</small>
    <br/>
    <small>Created: [ {created.map(s => s.label).join(', ')} ]</small>
</p>

<p>
    <Knobs bind:state {config}/>
</p>

```sv
<script>
    import { Autocomplete } from 'svelte-spectre'

    let predefined = [
            'top_left',
            'top_center',
            'top_right',
            'center_left',
            'center_center',
            'center_right',
            'bottom_left',
            'bottom_center',
            'bottom_right',
        ],
        groups = [
            '↖ top_left',
            '↑ top_center',
            '↗ top_right',
            '← center_left',
            '✛ center_center',
            '→ center_right',
            '↙ bottom_left',
            '↓ bottom_center',
            '↘ bottom_right',
        ],
        seleted = []
    
    const groupsBy = (item) => {
        return groups.split(', ').find((g) => item.value.includes(g))
    }
</script>

<Autocomplete
    {predefined}
    bind:selected
    bind:created
    placeholder="type here"
    empty="No suggested"
    {groupBy}
/>
<small>Selected: [ {selected.map(s => s.label).join(', ')} ]</small>
<small>Created: [ {created.map(s => s.label).join(', ')} ]</small>
```
