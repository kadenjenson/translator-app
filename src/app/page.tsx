import ToolContainer from '@/components/tools/ToolContainer'

export default function Home()
{
  return (
    <div>
      <h1>Home Page!</h1>

      <ToolContainer />
      <ToolContainer
        title='and a 2nd one'
        description='we can put lots of stuff in these'
      />
      <ToolContainer
        title='last one'
      />
    </div>
  )
}
