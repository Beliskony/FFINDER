import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface PostProps {
  author: string;
  content: string;
  likes: number;
  media: string | null;
}

interface Comment {
  author: string;
  text: string;
}

export default function Post({ author, content, likes, media }: PostProps) {
  const [likeCount, setLikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [showCommentInput, setShowCommentInput] = useState(false);

  const liker = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const addComment = () => {
    if (newComment.trim() !== '') {
      const newCommentObj: Comment = {
        author: "Vous", // Remplacez par l'utilisateur authentifié
        text: newComment
      };
      setComments([...comments, newCommentObj]);
      setNewComment(''); // Réinitialiser le champ de texte après l'ajout du commentaire
    }
  };

  const toggleCommentInput = () => {
    setShowCommentInput(!showCommentInput); // Afficher ou masquer le champ commentaire
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{ uri: `https://ui-avatars.com/api/?name=${author}&background=random` }}
          resizeMode="cover"
        />
        <Text style={styles.author}>{author}</Text>
      </View>
      <Text style={styles.content}>{content}</Text>
      {media && <Image source={{ uri: media }} style={styles.media} />}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={liker}>
          <Ionicons name={isLiked ? "heart" : "heart-outline"} size={24} color={isLiked ? "red" : "#657786"} />
          <Text style={styles.actionText}>{likeCount}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={toggleCommentInput}>
          <Ionicons name="chatbubble-outline" size={24} color="#657786" />
          <Text>{comments.length}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="share-outline" size={24} color="#657786" />
        </TouchableOpacity>
      </View>

      {/* Afficher les commentaires */}
      <FlatList
        data={comments}
        renderItem={({ item }) => (
          <View style={styles.commentContainer}>
            <Image
              style={styles.commentAvatar}
              source={{ uri: `https://ui-avatars.com/api/?name=${item.author}&background=random` }}
              resizeMode="cover"
            />
            <View style={styles.commentContent}>
              <Text style={styles.commentAuthor}>{item.author}</Text>
              <Text>{item.text}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Afficher le champ de saisie uniquement si showCommentInput est vrai */}
      {showCommentInput && (
        <View>
          <View style={{ flexDirection: "row", height:40, marginTop:5}}>
            <TextInput
              placeholder="ajouter un commentaire"
              placeholderTextColor={"black"}
              value={newComment}
              onChangeText={setNewComment}
              style={styles.commentInput}
            />
          </View>
          <View style={{ alignSelf: "flex-end", marginHorizontal: 15 }}>
            <TouchableOpacity onPress={addComment}>
              <Ionicons name="send" size={24} color="#657786" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e8ed',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  author: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
  },
  media: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 5,
    color: '#657786',
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  commentAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
  },
  commentAuthor: {
    fontWeight: 'bold',
  },
  commentInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#e1e8ed',
    flex: 1,
  },
});
