import React, { useEffect, useState } from "react";
import Select from "react-select";
import { getAllContacts } from "../services/contactService";

const SelectContact = ({ value, setData }) => {
    const [contacts, setContacts] = useState([]);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const data = await getAllContacts();
            setContacts(data);

            // React-Select için uygun formatta seçenekler oluştur
            const formattedOptions = data.map((contact) => ({
                value: contact.id,
                label: `${contact.name} ${contact.lastname}`,
            }));
            setOptions(formattedOptions);
        } catch (error) {
            console.error("Kişiler alınamadı:", error);
        }
    };

    const handleChange = (selectedOption) => {
        setData((prevData) => ({
            ...prevData,
            contactId: selectedOption.value, // Seçilen kişinin ID'sini kaydet
        }));
    };

    return (
        <Select
            options={options} // Kişi seçenekleri
            onChange={handleChange} // Seçim değiştiğinde çalışacak fonksiyon
            placeholder="Kişi Seçiniz"
            isSearchable // Arama yapılabilir
            value={options.find((option) => option.value === value)} // Varsayılan seçili değer
        />
    );
};

export default SelectContact;