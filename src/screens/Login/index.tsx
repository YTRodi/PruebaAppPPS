import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { TextInput as Input } from "react-native-paper";
import { FormikHelpers, Formik } from "formik";
import { TextInput, Button } from "../../components";
import { useToggle } from "../../hooks";
import { loginSchema } from "./schema";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const [showPassword, toggleShowPassword] = useToggle(false);

  const onSubmit = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    console.log("values", values);
    // formikHelpers.resetForm()
  };

  return (
    <SafeAreaView>
      <Formik<FormValues>
        initialValues={{ email: "yagorodi@gmail.com", password: "Password1" }}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
          isSubmitting,
        }) => (
          <View style={styles.container}>
            <TextInput
              label="Email"
              returnKeyType="next"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              error={!!errors.email && !!touched.email}
              errorText={errors.email}
              disabled={isSubmitting}
              autoCapitalize="none"
              textContentType="emailAddress"
              keyboardType="email-address"
            />

            <TextInput
              label="Password"
              returnKeyType="done"
              defaultValue=""
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              error={!!errors.password && !!touched.password}
              errorText={errors.password}
              disabled={isSubmitting}
              right={
                <Input.Icon
                  name={showPassword ? "eye" : "eye-off"}
                  onPress={toggleShowPassword}
                  disabled={isSubmitting}
                />
              }
              secureTextEntry={showPassword as boolean}
            />

            <Button
              style={styles.button}
              mode="contained"
              onPress={isSubmitting ? undefined : handleSubmit}
              disabled={!isValid}
              loading={isSubmitting}
            >
              Login
            </Button>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
  },
});

export default Login;
