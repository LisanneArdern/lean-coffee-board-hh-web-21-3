import Card from './Card'

export default {
  title: 'Card',
  component: Card,
}

const Template = args => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Hello world',
  author: 'John Doe',
}

export const LongName = Template.bind({})
LongName.args = {
  text: 'Hello world',
  author: 'Alessandro Rossi Berlusconi Ferrari Ricci La Quatra',
}
