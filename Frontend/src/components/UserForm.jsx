import { useSelector } from "react-redux";
import { useState } from "react";
import Form from "./Form";
import { Box, Container, Heading, VStack, Button, Text } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import { createUser } from "@/services/userService";
import { useNavigate } from "react-router";
import { HStack } from "@chakra-ui/react"
import { Radio, RadioGroup } from "@/components/ui/radio"
import Footer from "./Footer";
import Navbar from "./Navbar";

const UserForm = () => {
    const user = useSelector((state) => state.auth.user);
    const uid = user?.uid;
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("Male");
    const [height, setHeight] = useState("");
    const [currentWeight, setCurrentWeight] = useState("");
    const [targetWeight, setTargetWeight] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};

        if (!name.trim()) newErrors.name = "Name is required";
        if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) newErrors.email = "Invalid email format";
        if (!mobile.match(/^\d{10}$/)) newErrors.mobile = "Mobile number must be 10 digits";
        if (!age.match(/^\d+$/) || age < 1 || age > 120) newErrors.age = "Enter a valid age in numbers";
        if (!height.match(/^\d+(\.\d+)?$/) || height < 50 || height > 250) newErrors.height = "Enter a valid height in cm";
        if (!currentWeight.match(/^\d+(\.\d+)?$/) || currentWeight < 20 || currentWeight > 300) newErrors.currentWeight = "Enter a valid weight in kg";
        if (!targetWeight.match(/^\d+(\.\d+)?$/) || targetWeight < 20 || targetWeight > 300) newErrors.targetWeight = "Enter a valid target weight in kg";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;
        try {
            await createUser(uid, name, email, mobile, age, gender, height, currentWeight, targetWeight);
            toaster.create({
                title: "Success",
                description: "User created successfully!",
                duration: 3000,
                type: "success",
                isClosable: true,
            });
            navigate("/tracker");
        } catch (err) {
            toaster.create({
                title: "Error",
                description: err.message || "Something went wrong!",
                duration: 3000,
                type: "error",
                isClosable: true,
            });
        }
    };

    return (
        <Box alignContent={"center"} >
            <Navbar />
            <Box maxW="lg" mt={10} mx="auto" p={6} bg="bg.subtle" borderRadius="lg" boxShadow="lg">
                <VStack spacing={6} align="stretch" gap={5}>
                    <Heading size="2xl" textAlign="center" color="yellow">User Details</Heading>
                    <Form label="Name" placeHolder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    {errors.name && <Text color="red.500">{errors.name}</Text>}

                    <Form label="Email" placeHolder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <Text color="red.500">{errors.email}</Text>}

                    <Form label="Mobile" placeHolder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    {errors.mobile && <Text color="red.500">{errors.mobile}</Text>}

                    <Form label="Age" placeHolder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                    {errors.age && <Text color="red.500">{errors.age}</Text>}

                    <Text fontSize="lg" fontWeight="semibold" color="bg.inverted">Gender</Text>
                    <RadioGroup value={gender} colorPalette="yellow" variant="outline" size="sm" onValueChange={(e) => setGender(e.value)}>
                    <HStack gap="6">
                        <Radio value="Male">Male</Radio>
                        <Radio value="Female">Female</Radio>
                        <Radio value="Other">Other</Radio>
                    </HStack>
                    </RadioGroup>

                    <Form label="Height (cm)" placeHolder="Height" value={height} onChange={(e) => setHeight(e.target.value)} />
                    {errors.height && <Text color="red.500">{errors.height}</Text>}

                    <Form label="Current Weight (kg)" placeHolder="Current Weight" value={currentWeight} onChange={(e) => setCurrentWeight(e.target.value)} />
                    {errors.currentWeight && <Text color="red.500">{errors.currentWeight}</Text>}

                    <Form label="Target Weight (kg)" placeHolder="Target Weight" value={targetWeight} onChange={(e) => setTargetWeight(e.target.value)} />
                    {errors.targetWeight && <Text color="red.500">{errors.targetWeight}</Text>}

                    <Button colorScheme="yellow" variant='outline' onClick={handleSubmit}>Submit</Button>
                </VStack>
            </Box>
            <Footer />
        </Box>
    );
};

export default UserForm;
