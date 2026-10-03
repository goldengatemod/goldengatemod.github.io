export default defineAppConfig({
  ui: {
    colors: {
      primary: 'amber',
    },
    accordion: {
      slots: {
        root: 'w-full text-highlighted',
        item: 'border-b border-(--gg-border-neutral) last:border-b-0',
      },
    },
    popover: { slots: { content: 'z-[1500]' } },
    modal: { slots: { overlay: 'z-[1600]', content: 'z-[1600]' } },
    tabs: { slots: { content: 'min-w-0' } },
    pageCard: {
      variants: {
        variant: {
          outline: {
            description: 'text-toned',
          },
        },
      },
    },
  },
});
