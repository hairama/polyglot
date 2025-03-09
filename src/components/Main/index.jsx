import "./Main.scss";
import React from "react";
import TranslationForm from "/src/components/TranslationForm/TranslationForm";
import useTranslationForm from "../../hooks/useTranslationForm";

export default function Main() {
    const formProps = useTranslationForm();
    return <TranslationForm {...formProps} />;
}
