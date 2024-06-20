import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import Button from "../../components/Button";
import Input, { InputProps } from "../../components/Input";
import { TextInput } from "react-native-gesture-handler";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;

type Props = {
  navigation: LoginScreenNavigationProp;
};

function LoginScreen({ navigation }: Props) {
  const [fieldValidity, setFieldValidity] = useState<{ [key: string]: boolean | undefined }>({});

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Refs para os campos de entrada
  const passwordRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);

  // Função para simular o clique do botão "Cadastrar"
  const handleRegisterPress = () => {
    alert("Botão pressionado!");
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <View style={styles.container}>
        <Input
          placeholder=""
          label="Usuário"
          id="usuario"
          required={false}
          value={user}
          onChangeText={(text) => setUser(text)}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <Input
          placeholder=""
          label="Senha"
          id="senha"
          required={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          type="password"
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current?.focus()}
          ref={passwordRef}
        />
        <Input
          placeholder=""
          label="Email"
          id="email"
          required={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
          returnKeyType="done"
          onSubmitEditing={handleRegisterPress}
          ref={emailRef}
        />
        <Button title="Cadastrar" onPress={handleRegisterPress} type="salvar" />
      </View>
      <Button title="Login" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dadada",
  },
});

export default LoginScreen;
