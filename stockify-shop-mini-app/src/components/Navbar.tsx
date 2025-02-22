
import { Button, View, Text } from "react-native"
type NavbarProps = {
  dismiss?: () => void
}

export default function Navbar({dismiss}: NavbarProps) {
  return (
    <View style={{padding: 10, backgroundColor: 'lightgray'}}>
      <Text>My Custom Header</Text>
      <Button title="Close" onPress={dismiss} />
    </View>
  )
}
