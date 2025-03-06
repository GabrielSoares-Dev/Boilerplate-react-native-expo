import { View, Text } from 'react-native'
import { Button, ButtonLoading } from '@components'

export default function Home() {
  return (
    <View>
      <Text>homedd</Text>
      <Button
        variant="primary"
        // onPress={handleSubmit(onSubmit)}
        label="Entrar"
        // isLoading={isLoading}
        loading={<ButtonLoading variant="primary" />}
      />
    </View>
  )
}
