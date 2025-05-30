import React from 'react';
import Card from '../components/ui/Card';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

export default function GameOverScreen({
    restartGame,
}: {
    restartGame: () => void;
}) {
    return (
        <Card>
            <Title>Game Over!</Title>
            <PrimaryButton onPress={() => restartGame()}>Return</PrimaryButton>
        </Card>
    );
}
