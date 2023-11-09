import { View, Text, Button } from 'react-native'
import { useAuthStore, userDetails } from './hooks/useAuthStore'

const App = () => {
  const { user, setUser, loggedIn } = useAuthStore();
  const login = () => {
    const userData: userDetails = {
      email: "person@mail.com",
      token: "my long random token"
    }
    setUser(userData);
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
      {loggedIn ? (<>
        <Text>User with email {user?.email} is loggedIn</Text>
      </>
      ) : (
        <>
          <Button title="Login" onPress={login} />
        </>
      )}
    </View>
  );
}

export default App