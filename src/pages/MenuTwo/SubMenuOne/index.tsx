import menu, { changeMenu } from "@/constants/menu"
import { changeTreeNode, findTreeNode } from "@/utils"
import { Button, Input } from "antd"
import { useEffect, useState } from "react"


export const SubMenuOne: React.FC = () => {
  const [value, setValue] = useState<string>("")
  const [newMenu, setNewMenu] = useState<any[]>([])

  useEffect(() => {
    const amenu = menu.concat()
    setNewMenu(amenu)
    console.log(amenu)
    findTreeNode(amenu, "/menu-two/sub-menu-one").then((node: any) => {
      console.log(node)
      setValue(node?.name || "")
    })
  }, [])

  return (
    <>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button type="primary" onClick={() => { changeMenu(changeTreeNode(newMenu, "/menu-two/sub-menu-one", value)) }}>确定</Button>
    </>

  )
}

export default SubMenuOne